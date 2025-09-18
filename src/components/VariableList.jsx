import React, { useEffect, useState } from "react";
import { Button } from "../catalyst/button";
import { deleteVariable, getVariables } from "../api/api";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

function VariableList({ refresh, onEdit, setIsOpen }) {
  const [variables, setVariables] = useState([]);
  const fetchVariables = async () => {
    const response = await getVariables();
    setVariables(response.data);
  };
  const handleEdit = async (key, value, id) => {
    onEdit(key, value, id);
    setIsOpen(true);
    console.log(key, value, id);
  };
  const handleDel = async (id) => {
    await deleteVariable(id);
    setVariables(variables.filter((item) => item._id !== id));
  };

  useEffect(() => {
    fetchVariables();
  }, [refresh]);
  return (
    <div className="mt-6 rounded-xl shadow border border-gray-200">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-gray-700 text-sm uppercase ">
          <tr>
            <th className="px-6 py-3 text-center">Key</th>
            <th className="px-6 py-3 text-center">Value</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {console.log(variables)}
          {variables.map((item, i) => (
            <tr key={i} className="hover:bg-gray-50 ">
              <td className="px-6 py-3 font-medium text-gray-900 text-center">
                {item.key}
              </td>
              <td className="px-6 py-3 text-gray-700 text-center">
                {item.value}
              </td>

              <td className="px-6 py-3 hidden  md:flex justify-center gap-3">
                <Button
                  onClick={() => handleEdit(item.key, item.value, item._id)}
                >
                  Edit
                </Button>
                <Button onClick={() => handleDel(item._id)}>Delete</Button>
              </td>

              <td className="px-6 py-3 h-10 md:hidden flex justify-center gap-3">
                <PencilIcon
                  onClick={() => handleEdit(item.key, item.value, item._id)}
                />
                <TrashIcon onClick={() => handleDel(item._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VariableList;

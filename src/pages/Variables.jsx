import React, { useEffect, useState } from "react";
import { Button } from "../catalyst/button";
import {
  Dialog,
  DialogDescription,
  DialogTitle,
  Field,
  Input,
  Label,
} from "@headlessui/react";
import loader from "../../public/loading.svg";
import { DialogActions, DialogBody } from "../catalyst/dialog";

import VariableList from "../components/VariableList";
import { createVariable, editVariable, getVariables } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";

function Variable() {
  let [isOpen, setIsOpen] = useState(false);
  let [key, setKey] = useState("");
  const [loading, setLoading] = useState(false);
  let [value, setValue] = useState("");
  const [editId, setEditID] = useState("");
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (key, value, id) => {
    setEditID(id);
    setKey(key);
    setValue(value);
    setIsOpen(true);
  };

  const handleVariable = async () => {
    if (editId) {
      setLoading(true);

      const res = await editVariable(editId, key, value);
      console.log(res);
    } else {
      setLoading(true);

      await createVariable(key, value);
    }
    setLoading(false);
    setIsOpen(false);
    setKey("");
    setEditID("");
    setValue("");
    setRefresh(!refresh);
  };

  return (
    <div className="p-5">
      <div className="mt-6 flex justify-between items-center px-10">
        <h2 className="text-lg font-semibold">Variables</h2>

        <Button type="button" onClick={() => setIsOpen(true)}>
          Add Variable
        </Button>
      </div>

      <Dialog open={isOpen} onClose={setIsOpen} className="">
        <div className="fixed inset-0 bg-black/40" />

        {loading ? (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/10 backdrop-blur-sm">
            <img src={loader} width="50" height="50" />
          </div>
        ) : (
          <div className="fixed inset-0   flex flex-col items-center justify-center p-4">
            <div className="sm:w-full max-w-md rounded-2xl bg-white shadow-xl">
              <div className="p-6 flex flex-col justify-center ">
                <DialogTitle className="text-lg font-bold">
                  Add Variable
                </DialogTitle>
                <DialogDescription className="text-sm text-gray-500 mb-4">
                  Add variable for easy access.
                </DialogDescription>
                <DialogBody className="space-y-6">
                  <Field>
                    <Label>Key</Label>
                    <Input
                      className="border p-2 rounded-lg w-full text-black"
                      placeholder="Enter key"
                      value={key}
                      onChange={(e) => setKey(e.target.value)}
                    />
                  </Field>
                  <Field>
                    <Label>Value</Label>
                    <Input
                      className="border p-2 rounded-lg w-full text-black"
                      placeholder="Enter value"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </Field>
                </DialogBody>
                <DialogActions className="">
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                  <Button
                    className="bg-blue-500 text-white"
                    onClick={handleVariable}
                  >
                    {editId ? "Update" : "Add"}
                  </Button>
                </DialogActions>
              </div>
            </div>
          </div>
        )}
      </Dialog>

      <VariableList
        refresh={refresh}
        onEdit={handleEdit}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default Variable;

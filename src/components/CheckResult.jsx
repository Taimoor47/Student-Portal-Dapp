import { ethers } from "ethers";
import React from "react";
import { useState } from "react";
import "../App.css";
import ABI from "../contract/Portal.json";

export default function CheckResult() {
  const [cocntractdata, setContractData] = useState("");
  const [studentname, setStudentname] = useState(" ");
  
  let contract;
  const Address = "0xa1c6f7a7078395a04a6dd13fb2f2f2cff8691c92";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  contract = new ethers.Contract(Address, ABI, signer);
  console.log(contract.address);
  console.log(studentname);

  const getData = async () => {
    try {
      const phrase = await contract.checkResult(studentname);
      setContractData(phrase);
      console.log(phrase);
    } catch (err) {
      console.error(err);
      if (err.errorName != "StudentNotExist") return;
      setContractData("Student not found");
    }
  };
  console.log(cocntractdata);
  return (
    <>
      <div className="App">
        <h1>Check Student Result</h1>
        <div className="">
          <div className="form-group m-1">
            {/* <label for="exampleInputPassword1">Marks</label> */}
            <input
              type="name"
              className="form-control"
              id="exampleInputPassword1"
              placeholder=" Student Name"
              onChange={(e) => setStudentname(e.target.value)}
            />
          </div>
          <button
            className="btn btn-info m-1 "
            onClick={() => {
              getData();
            }}
          >
            Check
          </button>
        </div>
        <div className="">
          <span>{cocntractdata}</span>
        </div>
      </div>
    </>
  );
}

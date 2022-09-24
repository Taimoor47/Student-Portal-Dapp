// import BigNumber from 'big-number/big-number';
import { ethers } from "ethers";
import React, { useState } from "react";
import "../App.css";
import ABI from "../contract/Portal.json";

export default function StudentInfo() {
  const [studentname, setStudentname] = useState("");
  const [resdata, setResdata] = useState({});

  const Address = "0xa1c6f7a7078395a04a6dd13fb2f2f2cff8691c92";
  let contract;

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  contract = new ethers.Contract(Address, ABI, signer);
  console.log(contract.address);

  const getData = async () => {
    const studentData = await contract.checkStudentData(studentname);
    setResdata(studentData);
    console.log(parseInt(resdata.marks));
    console.log(resdata);
  };

  return (
    <>
      <div className="App">
        <h1>Check Student Information</h1>
        <div className="">
          <div className="form-group m-1">
            {/* <label for="exampleInputPassword1">Marks</label> */}
            <input
              type="name"
              className="form-control "
              id="exampleInputPassword1"
              placeholder=" Student Name"
              onChange={(e) => setStudentname(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => getData()}
            className="btn btn-info m-2 "
          >
            Check
          </button>
        </div>
        <div className="">
          {[resdata].map((data, index) => (
            <span key={index}>
              <p className="text-white">{data.name}</p>
              {parseInt(resdata.marks) ? (
                <div className="">
                  <p>Father Name: {data.Fname}</p>
                  <p>Class: {parseInt(data.class)}</p>
                  <p>Obtaind Marks: {parseInt(data.marks)}</p>
                </div>
              ) : (
                " "
              )}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

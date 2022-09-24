// import { ethers } from "hardhat";
import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import ABI from "../contract/Portal.json";

// import { Link } from "react-router-dom";

export default function StudntPortal() {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [clas, setClass] = useState();
  const [marks, setMarks] = useState();
  const [metamaskcheck, setMetamaskcheck] = useState(false);
  const [inputcheck, setInputcheck] = useState(false);

  var contract = false;

  const Address = "0xa1c6f7a7078395a04a6dd13fb2f2f2cff8691c92";

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  contract = new ethers.Contract(Address, ABI, signer);
  console.log(contract.address);

  async function connect() {
    const { ethereum } = window;
    if (typeof window.ethereum !== "undefined") {
      await ethereum.request({
        method: "eth_requestAccounts",
      });
      setMetamaskcheck(true);
      console.log("Metamask connected successfully");
    }
  }

  async function studentAdd() {
    if ((!name, !fname, !clas, !marks))
      return setInputcheck("Input Required !");
    setInputcheck(" ");
    if (typeof window.ethereum !== "undefined") {
      await connect();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      contract = new ethers.Contract(Address, ABI, signer);
      const sendTx = await contract.addStudent(name, fname, clas, marks);
      await sendTx.wait();
      console.log(sendTx);
    }
  }

  return (
    <>
      <h1>Add Student</h1>

      <form className="w-5">
        <div className="form-group m-2">
          {/* <label for="exampleInputEmail1">Name</label> */}
          <input
            type="name"
            className="form-control"
            id="exampleInputName1"
            aria-describedby=""
            placeholder=" Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          {/* <label for="exampleInputPassword1">Father Name</label> */}
          <input
            type="name"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Father Name"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>

        <div className="form-group m-2">
          {/* <label for="exampleInputPassword1">Class</label> */}
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder=" Class"
            onChange={(e) => setClass(e.target.value)}
          />
        </div>

        <div className="form-group m-2">
          {/* <label for="exampleInputPassword1">Marks</label> */}
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Give Marks Out of 840"
            onChange={(e) => setMarks(e.target.value)}
          />
        </div>

        <p className="text-danger" style={{ fontSize: "21px" }}>
          {inputcheck}
        </p>

        <button
          type="button"
          onClick={() => studentAdd()}
          className="btn btn-info"
        >
          Add
        </button>

        <button
          type="button"
          onClick={() => {
            connect();
          }}
          className="btn btn-info m-2"
        >
          {metamaskcheck ? "Wallet connected" : "Connecte Wallet"}
        </button>
      </form>
    </>
  );
}

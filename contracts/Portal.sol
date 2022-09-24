// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Portal {
    struct student {
        string Fname;
        uint class;
        uint marks;
    }

    mapping(string => student) public checkStudentData;
    mapping(string => bool) private studentCheck;

    error StudentAlreadyExist(string name);
    error StudentNotExist(string name);

    function addStudent(string memory _name,string memory _fname,uint class,uint marks) public{
        if(studentCheck[_name] == true) revert StudentAlreadyExist(_name);
        checkStudentData[_name] = student(_fname,class,marks);
        studentCheck[_name] = true;
    }

    function checkResult(string memory _studentName)public view returns(string memory){
        if(studentCheck[_studentName] == false ) 
        revert StudentNotExist(_studentName);
        if(checkStudentData[_studentName].marks >= 810){
            return "Congratulations Passed with A Grade";
        }else if(checkStudentData[_studentName].marks >= 700){
            return "Passed with B Grade";
        }else if(checkStudentData[_studentName].marks >= 560){
            return "Passed with C Grade";
        }else if(checkStudentData[_studentName].marks >= 400){
            return "Passed But Need more practice";
        }else{
            return "Batter Luck for next time";
        }
       
    }


}
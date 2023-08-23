/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";

function Component2() {
  const initialData = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"],
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"],
    },
  ];

  const [departments, setDepartments] = useState(initialData);
  const [selectedDepartments, setSelectedDepartments] = useState({});

  const toggleSubDepartments = (index) => {
    const newDepartments = [...departments];
    newDepartments[index].expanded = !newDepartments[index].expanded;
    setDepartments(newDepartments);
  };

  const handleDepartmentToggle = (index) => {
    const newSelectedDepartments = { ...selectedDepartments };
    newSelectedDepartments[index] = !newSelectedDepartments[index];

    departments[index].sub_departments.forEach((subDept) => {
      newSelectedDepartments[subDept] = newSelectedDepartments[index];
    });

    setSelectedDepartments(newSelectedDepartments);
  };

  const handleSubDepartmentToggle = (deptIndex, subDept) => {
    const newSelectedDepartments = { ...selectedDepartments };
    newSelectedDepartments[subDept] = !newSelectedDepartments[subDept];

    // Check if all sub-departments are selected, then mark the parent department as selected
    const allSubDeptsSelected = departments[deptIndex].sub_departments.every(
      (subDept) => newSelectedDepartments[subDept]
    );
    newSelectedDepartments[deptIndex] = allSubDeptsSelected;

    setSelectedDepartments(newSelectedDepartments);
  };

  return (
    <div>
      <h3>Departments and Sub-departments</h3>
      <List>
        {departments.map((dept, deptIndex) => (
          <div key={deptIndex}>
            <ListItem button onClick={() => toggleSubDepartments(deptIndex)}>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => toggleSubDepartments(deptIndex)}
              >
                {dept.expanded ? <span>&#9866;</span> : <span>&#10009;</span>}
              </span>
              <Checkbox
                checked={
                  selectedDepartments[dept.department] ||
                  dept.sub_departments.every(
                    (subDept) => selectedDepartments[subDept]
                  )
                }
                onChange={() => handleDepartmentToggle(dept?.department)}
                indeterminate={
                  !selectedDepartments[dept.department] &&
                  dept.sub_departments.some(
                    (subDept) => selectedDepartments[subDept]
                  )
                }
              />
              <ListItemText primary={dept.department} />
            </ListItem>
            <Collapse in={dept.expanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {dept.sub_departments.map((subDept, subDeptIndex) => (
                  <ListItem key={subDeptIndex} button sx={{ pl: 4 }}>
                    <Checkbox
                      checked={selectedDepartments[subDept]}
                      onChange={() =>
                        handleSubDepartmentToggle(deptIndex, subDept)
                      }
                    />
                    <ListItemText primary={subDept} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  );
}

export default Component2;

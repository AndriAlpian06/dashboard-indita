import React from 'react';

const SubMenu = ({ subMenuData }) => {
  return (
    <>
      {/* <h2>SubMenu</h2> */}
      {/* <ul>
        {subMenuData.map((subMenu) => (
          <li key={subMenu.id}>{subMenu.nama_submenu}</li>
        ))}
      </ul> */}
    <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Nama SubMenu</th>
            </tr>
        </thead>
        <tbody>
            {subMenuData.map((subMenu) => (
            <tr key={subMenu.id}>
                <td>{subMenu.id}</td>
                <td>{subMenu.nama_submenu}</td>
            </tr>
            ))}
        </tbody>
    </table>
    </>
  );
};

export default SubMenu;
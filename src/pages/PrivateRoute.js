// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";


// const PrivateRoute= ({ children }) => {
//   const { user } = useSelector((state) => state.persisted.user);
//   console.log(user);

//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//     }
//   }, [navigate, user]);

//   return <>{children}</>;
// };

// export default PrivateRoute;

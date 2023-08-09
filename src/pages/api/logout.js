// pages/api/logout.ts

import cookieConfig from "@/helper/cookieConfig";
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  function logoutRoute(req, res, session) {
    req.session.destroy();
    res.send({ success: true, message: "Logout success" });
  },
  cookieConfig
);
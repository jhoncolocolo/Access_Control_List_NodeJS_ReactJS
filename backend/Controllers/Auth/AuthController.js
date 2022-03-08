import UserModel from "../../Database/Models/User.js";
import RoleUserModel from "../../Database/Models/RoleUser.js";
import RoleModel from "../../Database/Models/Role.js";
//import {getUserAuth } from '../../Services/UserRoleService.js'
import getUserAuth from "../../Services/UserRoleService.js";
import jwt from "jsonwebtoken";

let refreshTokens = [];

export const refresh = async (req,res) => {
  //take the refresh token from the user
  const refreshToken = req.body.token;

  //send error if there is no token or it's invalid
  if (!refreshToken) return res.status(401).json("You are not authenticated!");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid!");
  }
  jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);
    refreshTokens.push(newRefreshToken);
    console.log(user);
    res.status(200).json({
      name:user.name,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });

  //if everything is ok, create new access token, refresh token and send to user
}

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id,name:user.name, isAdmin: user.isAdmin }, "mySecretKey", {
    expiresIn: "15m",
  });
};

const generateRefreshToken = (user) => {
  console.log(user);
  return jwt.sign({ id: user.id,name:user.name, isAdmin: user.isAdmin }, "myRefreshSecretKey");
};

//** ALlow Access Systems**//
export const login = async (req,res) => {
  const { username, password } = req.body;
  try{
    const user = await getUserAuth(username,password);
    if (user) {
      //Generate an access token
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      refreshTokens.push(refreshToken);
      return res.json({name:user.name,isAdmin:user.isAdmin,accessToken,
      refreshToken})
    }
  } catch (error) {
    return res.json(error)
  }
}


export const logout = async (req,res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("You logged out successfully.");
}
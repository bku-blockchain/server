import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

import * as config from '../config';

const AuthToken = mongoose.model('AuthToken');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.app.email.address,
    pass: config.app.email.password
  }
});


export function authorization(req, res, next) {
  // TODO
}

export const login = async (req, res, next) => {
  // TODO
};

export const forgotPassword = async (req, res, next) => {
  // TODO
};

export const resetPassword = async (req, res, next) => {
  // TODO
};

export function logout(req, res, next) {
  // TODO
}

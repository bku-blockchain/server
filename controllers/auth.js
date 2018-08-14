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
  next();
}

export const login = async (req, res, next) => {
  // TODO
  const { email, password } = req.body;
  console.log(email, password);
  const user = { id: 'abc', email };
  const token = '8N98SE93F903HT983HF9H349T93FH985HG03N083H049R8H34HT93H';
  res.status(201).send({ user, token });
  // res.status(400).send(new Error('Wrong password').message);
};

export const forgotPassword = async (req, res, next) => {
  // TODO
  const { email } = req.body;
  console.log(email);
  res.status(200).send('Email has been sent.');
  // res.status(400).send(new Error('Account connected the email is\'t existen').message);
};

export const resetPassword = async (req, res, next) => {
  // TODO
};

export function logout(req, res, next) {
  // TODO
}

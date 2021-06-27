/* eslint-disable brace-style */
// Variable Assignment
const dotenv = require('dotenv');
const Discord = require('discord.js');
const client = new Discord.Client();
const debug = false;

dotenv.config();
const owner = process.env.ownerID;

client.once('ready', () => {
	console.log('Ready');
});

client.login(process.env.TOKEN);

client.on('message', message => {
	// Code Here
});
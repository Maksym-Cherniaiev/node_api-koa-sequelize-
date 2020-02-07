import enforcePath from 'enforce-node-path';
import server from 'app';

enforcePath(__dirname);

server.start();

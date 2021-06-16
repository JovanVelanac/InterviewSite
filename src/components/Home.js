import React, {useState, useEffect} from "react";
import styles from './Home.module.css';

const Home = () => {
    
  const [btcInfo, setbtcInfo] = useState([]);
  
  var W3CWebSocket = require('websocket').w3cwebsocket;

  var client = new W3CWebSocket('wss://api-pub.bitfinex.com/ws/2', 'echo-protocol');
  
  client.onerror = function() {
      console.log('Connection Error');
  };

  useEffect(() => {  client.onopen = function() {
    console.log('WebSocket Client Connected');

    function sendNumber() {

        let msg = JSON.stringify({ 
            event: 'subscribe', 
            channel: 'ticker', 
            symbol: 'tBTCUSD' 
          })

        if (client.readyState === client.OPEN) {
            client.send(msg);
        }
    }
    sendNumber();
};

client.onclose = function() {
    console.log('echo-protocol Client Closed');
};

client.onmessage = function(e) {
  const splitdata = e.data.split(',');
  console.log(splitdata);
    if (typeof e.data === 'string') {
      if(splitdata[5] != null){
        setbtcInfo([splitdata[5], splitdata[7], splitdata[8]]);
      }
    }
};}, []);

  
    return <div className={styles.table}>
  <table>
  <tr>
    <th>Symbol</th>
    <th>Daily Change</th>
    <th>Last Price</th>
    <th>Volume</th>
  </tr>
  <tr>
    <td>BTCUSD</td>
    <td>{btcInfo[0]}</td>
    <td>{btcInfo[1]}</td>
    <td>{btcInfo[2]}</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table> 
</div>
};

export default Home;
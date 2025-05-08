(function(){
    const outputElem = document.getElementById('output');
    const inputElem = document.getElementById('cmdInput');
    const promptStr = '> ';
    const commands = {
      help: `Available commands:\n help - Display this help text\n hack - Start hacking simulation\n clear - Clear terminal\n about - About this terminal\n wifi - Show network connection details (limited browser info)\n wifiapi - Fetch WiFi data from external API\n try typing a question or phrase to get answers.`,
      about: `Hacking Terminal v1.3\nCreated by BLACKBOXAI\nSimulated hacking environment with Q&A, WiFi info, and API fetch feature.`,
    };
    let hackLines = [
      "Initializing hack sequence...",
      "Connecting to target system...",
      "Breaching firewall...",
      "Bypassing security protocols...",
      "Downloading sensitive data...",
      "Injecting malicious code...",
      "Hack complete! Data exfiltrated.",
    ];
    let hackIndex = 0;
    let hacking = false;
  
    // Simple Q&A knowledge base
    const knowledgeBase = {
      "who are you": "I am a simulated hacking terminal created for fun.",
      "what is hacking": "Hacking is the act of exploring computer systems and networks, sometimes to find vulnerabilities.",
      "how to hack": "Sorry, I can't help with that. Remember to use your skills responsibly!",
      "what time is it": () => {
        return new Date().toLocaleTimeString();
      },
      "hello": "Hello! How can I assist your hacking simulation today?",
      "help": commands.help,
      "about": commands.about,
    };
  
    // Scroll output to bottom helper
    function scrollOutput(){
      outputElem.scrollTop = outputElem.scrollHeight;
    }
  
    // Write line to output
    function writeLine(text){
      outputElem.textContent += text + "\n";
      scrollOutput();
    }
  
    // Clear output
    function clearOutput(){
      outputElem.textContent = '';
    }
  
    // Simulate hacking sequence with delays
    function simulateHack(){
      if(hackIndex < hackLines.length){
        writeLine(hackLines[hackIndex]);
        hackIndex++;
        setTimeout(simulateHack, 1500);
      } else {
        hacking = false;
        hackIndex = 0;
        writeLine("\n> Hack sequence complete. Type 'help' for commands.");
      }
    }
  
    // Get WiFi/network connection info using Network Information API
    function getWiFiInfo(){
      const navConn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if(!navConn){
        return "Network Information API not supported in this browser.";
      }
      let infoStr = "Network connection details:\n";
      infoStr += `Type: ${navConn.type || 'unknown'}\n`;
      infoStr += `Effective type: ${navConn.effectiveType || 'unknown'}\n`;
      infoStr += `Downlink speed: ${navConn.downlink || 'unknown'} Mbps\n`;
      infoStr += `Round-trip time: ${navConn.rtt || 'unknown'} ms\n`;
      infoStr += `Save data mode: ${navConn.saveData ? 'Yes' : 'No'}`;
      return infoStr;
    }
  
    // Fetch WiFi data from external API (user needs to replace apiUrl with real endpoint)
    async function fetchWiFiDataFromAPI(){
      const apiUrl = 'https://your-api.example.com/wifi'; // TODO replace with actual API URL
  
      writeLine("Fetching WiFi data from API...");
  
      try {
        const response = await fetch(apiUrl, { method: 'GET', cache: 'no-cache' });
        if(!response.ok){
          writeLine(`API returned error: ${response.status} ${response.statusText}`);
          return;
        }
        const data = await response.json();
  
        writeLine("WiFi Data from API:");
        if(typeof data === 'object'){
          // Pretty print data object
          for(const key in data){
            if(Object.hasOwnProperty.call(data, key)){
              writeLine(`  ${key}: ${data[key]}`);
            }
          }
        } else {
          writeLine(String(data));
        }
      } catch(error) {
        writeLine("Error fetching WiFi data from API: " + error.message);
      }
    }
  
    // Attempt to answer user's question using knowledge base
    function getAnswer(input){
      input = input.toLowerCase().trim();
      if(knowledgeBase.hasOwnProperty(input)){
        const answer = knowledgeBase[input];
        if(typeof answer === "function"){
          return answer();
        }
        return answer;
      }
      // Try partial matching keywords
      for(const key in knowledgeBase){
        if(input.includes(key)){
          const answer = knowledgeBase[key];
          if(typeof answer === "function"){
            return answer();
          }
          return answer;
        }
      }
      return "Sorry, I don't understand that command or question. Type 'help' for options.";
    }
  
    // Handle command input
    function handleCommand(cmd){
      cmd = cmd.trim();
      if(cmd.length === 0) return;
  
      writeLine(promptStr + cmd);
      const cmdLower = cmd.toLowerCase();
  
      if(cmdLower === 'help'){
        writeLine(commands.help);
      } else if(cmdLower === 'clear'){
        clearOutput();
      } else if(cmdLower === 'about'){
        writeLine(commands.about);
      } else if(cmdLower === 'hack'){
        if(hacking){
          writeLine("Hack sequence already running...");
        } else {
          hacking = true;
          hackIndex = 0;
          writeLine("Starting hack...");
          setTimeout(simulateHack, 1000);
        }
      } else if(cmdLower === 'wifi'){
        const wifiInfo = getWiFiInfo();
        writeLine(wifiInfo);
      } else if(cmdLower === 'wifiapi'){
        // Fetch data from external API
        fetchWiFiDataFromAPI();
      } else {
        // Treat as question - answer or default
        const answer = getAnswer(cmd);
        writeLine(answer);
      }
      scrollOutput();
    }
  
    // Input event listeners
    inputElem.focus();
    inputElem.addEventListener('keydown', function(e){
      if(e.key === 'Enter'){
        e.preventDefault();
        const cmd = inputElem.value;
        inputElem.value = '';
        handleCommand(cmd);
      } else if(e.key === 'ArrowUp' || e.key === 'ArrowDown'){
        e.preventDefault(); // disable command history for simplicity
      }
    });
  
    // Initial message
    writeLine("Welcome to the Hacking Terminal.");
    writeLine("Type 'help' for a list of commands.\n");
  })();

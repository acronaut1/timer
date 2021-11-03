const usrInput = process.argv.slice(2);
let end = false;
let seconds = usrInput.filter(number => {return number > 0;});
let cntDwn = seconds;

const timer = function() {
  //console.log(end);
  for (const num of seconds) {    
    setInterval(clockit, 10);
    if (end === true) {
      return;
    }
    setTimeout(() => {
      end = true;
      console.log('\n 🔊**BEEP!**🔊            ');
      process.stdout.write('\x07');
      //console.log(end);
      return process.exit(1); // "Expurged-Exit" (Absolute)
    }, num * 1000)
  }
}; 

timer(seconds);

const spinner = ['|','/','-','\\', '|', '/', '-', '|'];
const clocker = ['🕛','🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛']
let counter = 0;


function clockit() {
  for (let clock of clocker) { 
      setTimeout(() => {
        if (end === true) {
           return; } 
          process.stdout.write(`\r  ...Counting Down... ${clock}`)
        }, counter += 85); 
      }; 
    }


for (let spin of spinner) {
  setTimeout(() => {process.stdout.write(`${spin}\r`)}, counter += 50);
};


//base by Cytra 
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Jean-parker-tech
//Instagram: Cytra_k9
//Telegram: t.me/Jeanparker100
//GitHub: @CytraK
//WhatsApp: +254715155196
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@Jean-parker-tech


const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()

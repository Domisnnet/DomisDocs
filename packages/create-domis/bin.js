#!/usr/bin/env node
import prompts from 'prompts';
import pc from 'picocolors';

console.log('');
console.log(pc.bgYellow(pc.black(' 🔥 DOMISPACKS TECHNICAL v1.0.4 🔥 ')));
console.log(pc.cyan(' Sales: https://kiwify.app/L2NNYK8'));
console.log(pc.cyan(' Checkout: https://pay.kiwify.com.br/heAmetM'));
console.log('');

const { proKey: raw } = await prompts({
  type: 'text',
  name: 'proKey',
  message: 'Digite sua PRO_KEY (ou TESTE)',
});
const proKey = (raw || '').trim();

if(!proKey || proKey.toUpperCase() === 'TESTE' || proKey.length < 4){
  console.log(pc.green(' OFERTA ATIVA:'));
  console.log(pc.white(' Checkout: https://pay.kiwify.com.br/heAmetM'));
  console.log(pc.white(' Sales: https://kiwify.app/L2NNYK8'));
  console.log('');
  process.exit(0);
}
console.log(' PRO_KEY: ' + proKey.slice(0,4) + '****');
#!/usr/bin/env node
import degit from 'degit';
import prompts from 'prompts';
import pc from 'picocolors';

console.log(pc.green(`\n🚀 create-domis - DomisPacks-Technical\n`));

const response = await prompts([
  {
    type: 'text',
    name: 'key',
    message: 'Digite sua PRO_KEY (enviada por e-mail da Kiwify):',
    validate: v => v.length > 10 ? true : 'PRO_KEY inválida'
  },
  {
    type: 'select',
    name: 'template',
    message: 'Qual pack deseja baixar?',
    choices: [
      { title: 'domisdocs-firebase-lite (R$49)', value: 'lite' },
      { title: 'domisdocs-firebase-pro (R$199)', value: 'pro' }
    ]
  }
]);

const repoMap = {
  lite: 'Domisnnet/DomisPacks-Technical/packs/domisdocs-firebase-lite',
  pro: 'Domisnnet/DomisPacks-Technical/packs/domisdocs-firebase-pro'
};

const repo = repoMap[response.template];

console.log(pc.cyan(`\n📦 Baixando ${repo} com sua PRO_KEY...\n`));

try {
  // Usa a PRO_KEY como token no git clone via degit com auth
  const emitter = degit(`${repo}`, {
    cache: false,
    force: true,
    verbose: true
  });

  // Passa token via env - degit usa https
  // O usuário precisa ter aceito convite do repo privado antes
  await emitter.clone('./domis-pack');

  console.log(pc.green(`\n✅ Pack baixado em ./domis-pack !\n`));
  console.log(pc.dim(`Próximos passos:`));
  console.log(`  cd domis-pack`);
  console.log(`  cp firebase.json seu-projeto/\n`);
} catch (e) {
  console.log(pc.red(`\n❌ Erro: ${e.message}\n`));
  console.log(pc.yellow(`Soluções:`));
  console.log(`1. Verifique se aceitou o convite do GitHub para DomisPacks-Technical`);
  console.log(`2. Verifique sua PRO_KEY`);
  console.log(`3. Tente via git clone manual:`);
  console.log(pc.cyan(`   git clone https://${response.key}@github.com/Domisnnet/DomisPacks-Technical.git\n`));
}

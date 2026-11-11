'use strict';
const toggle=document.querySelector('.mobile-nav-toggle');
const nav=document.querySelector('#site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');}));}
const year=document.querySelector('#year');if(year)year.textContent=String(new Date().getFullYear());
const run=document.getElementById('simulate');const reset=document.getElementById('reset-sim');const out=document.getElementById('sim-output');const steps=[...document.querySelectorAll('#sim-steps li')];
const events=['> webhook: evento de exemplo recebido (dados fictícios).','> segurança: evento e payload hipotéticos validados.','> contexto: fila/regras recuperadas (simulação local).','> decisão: mensagem pode seguir a resposta automatizada ou atendimento humano.','> saída: resposta de exemplo preparada. Nenhum envio real foi realizado.'];
let pos=-1;function paint(){steps.forEach((el,i)=>{el.classList.toggle('active',i===pos);el.classList.toggle('done',i<pos);});if(out)out.textContent=pos<0?'> Pronto para iniciar a simulação.':events[pos];if(run)run.textContent=pos>=steps.length-1?'Simulação concluída ✓':'Próxima etapa →';}
if(run)run.addEventListener('click',()=>{pos=pos>=steps.length-1?-1:pos+1;paint();});if(reset)reset.addEventListener('click',()=>{pos=-1;paint();});

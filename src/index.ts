import { createApp } from 'vue';
import './index.css';
import Counter from './components/Greetings.vue';

console.info('Client started');

createApp(Counter).mount('#counter')

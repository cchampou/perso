import { createApp } from 'vue';
import './index.css';
import Counter from './components/JobTitle.vue';

console.info('Client started');

createApp(Counter).mount('#counter')

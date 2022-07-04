import { DateTime } from '../luxon.js';

const dateTime = DateTime.now().toFormat('LLL dd yyyy, hh:mm:ss a');

export default dateTime;

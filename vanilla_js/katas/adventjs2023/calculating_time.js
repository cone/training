function calculateTime(deliveries) {
  const max = new Date('2024-01-01T07:00:00');
  const base = new Date('2024-01-01T00:00:00');
  const total = deliveries.reduce((base, d) => {
    const [hoursStr, minsStr, secsStr] = d.split(':');
    base.setHours(base.getHours() + parseInt(hoursStr));
    base.setMinutes(base.getMinutes() + parseInt(minsStr));
    base.setSeconds(base.getSeconds() + parseInt(secsStr));
    return base;
  }, base);
  const diff = (total - max)
  const diffInSeconds = Math.abs(diff)/1000;
  const diffInMinutes = diffInSeconds/60;
  const diffInHours = diffInMinutes/60;
  return `${diff < 0 ? '-' : ''}` +
         `${(Math.floor(diffInHours) + '').padStart(2, '0')}:` +
         `${(Math.floor(diffInMinutes % 60) + '').padStart(2, '0')}:` +
         `${(Math.floor(diffInSeconds % 60) + '').padStart(2, '0')}`;
}

// console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00'])); // '-02:20:00'
// console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00'])); // '00:30:00'
// console.log(calculateTime([
//   '00:45:00',
//   '00:45:00',
//   '00:00:30',
//   '00:00:30'
// ])); // '-05:29:00'
console.log(calculateTime(['01:01:01', '09:59:59', '01:01:01'])); // 05:02:01

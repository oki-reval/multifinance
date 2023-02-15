export const autoCurency = val => {
  if (val == 0) {
    return 'Rp. ' + val;
  }
  if (val) {
    const num = parseInt(val).toFixed(0);
    const rp = new Intl.NumberFormat('id-ID', {}).format(num);

    return 'Rp. ' + rp;
  }
  return;
};

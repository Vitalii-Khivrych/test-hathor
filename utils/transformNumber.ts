export const transformNumber = (num: number) => {
	return (Math.trunc(num * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d+))/g, ' ');
};

export default class Calculate {
	public static sum(nArray: number[]): number {
    if(nArray.length == 0) return 0;

		return nArray.reduce((
			previous: number,
			current: number,
		) => (previous + current));
	}

	public static sort(nArray: number[]): number[] {
		return nArray.toSorted((a, b) => (a - b));
	}

	public static mean(nArray: number[]): number {
    if(nArray.length == 0) return NaN;
		return this.sum(nArray) / nArray.length;
	}

	public static median(nArray: number[]): number {
		const sorted: number[] = this.sort(nArray);

		if (sorted.length % 2 === 0) {
			const lowerMiddleIndex: number = Math.floor(sorted.length / 2) - 1;
			const upperMiddleIndex: number = lowerMiddleIndex + 1;

			return (sorted[lowerMiddleIndex] + sorted[upperMiddleIndex]) / 2;
		} else {
			return sorted[Math.floor(sorted.length / 2)];
		}
	}

	public static mode(nArray: number[]): number | number[] {
		const kv: Record<number, number> = {};
		nArray.forEach((n) => {
			kv[n] = (kv[n] || 0) + 1;
		});
		const maxCount: number = Math.max(...Object.values(kv));
		const modes: number[] = Object.keys(kv).filter((key) =>
			kv[+key] === maxCount
		).map((key) => +key);
		return modes.length === 1 ? modes[0] : modes;
	}
}


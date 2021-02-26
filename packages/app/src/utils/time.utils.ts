export const get12HourTimes = (): string[] => {
    const times: string[] = [];
    for (let i = 0; i < 24; i++) {
        let hrs = i;
        if (i === 0) {
            hrs = 12;
        }
        if (i > 12) {
            hrs = i - 12;
        }
        const ampm = i < 12 ? 'AM' : 'PM';
        for (let j = 0; j < 60; j += 15) {
            times.push(`${hrs}:${j === 0 ? '00' : `${j}`} ${ampm}`);
        }
    }

    return times;
};

export const convert12HourTo24 = (value: string): string => {
    const [time, ampm] = value.split(' ');
    if (!time || !ampm) {
        return '';
    }

    const [hrs, mins] = time.split(':');
    if (!hrs || !mins) {
        return '';
    }

    let hours = Number.parseInt(hrs);
    if (ampm === 'AM') {
        if (hours === 12) {
            return `00:${mins}`;
        }

        return `0${hours}:${mins}`;
    }

    if (hours === 12) {
        return `${hours}:${mins}`;
    }

    return `${hours + 12}:${mins}`;
};

export const timeStrToISODuration = (str: string | undefined): string | undefined => {
    if (!str)  return undefined
    const p = str.split(':').map(s => Number(s));
    return 'PT' + (p[0] ? `${p[0]}H` : '') + (p[1] ? `${p[1]}M` : '');
};


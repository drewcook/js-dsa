import util from 'util';

const log = (...rest: any): void => console.log(util.inspect(rest, { depth: null }))

export default log

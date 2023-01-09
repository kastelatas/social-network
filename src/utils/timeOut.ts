export function timeOut(time: number, cb: () => void): void {
  setTimeout(cb, time)
}
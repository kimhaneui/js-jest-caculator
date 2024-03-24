async function main() {
    await delay(1000);
    await delay(2000);
    const result = await Promise.resolve('끝');
    console.log(result);
  }
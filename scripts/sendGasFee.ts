import { ethers } from "hardhat";

async function main() {
  const transactionSend = {
    // 送信先アドレス
    to: "0xA9...以下略",
    value: ethers.utils.parseEther("10.0"),
  };

  const [account] = await ethers.getSigners();
  await account.sendTransaction(transactionSend);
  console.log("success");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

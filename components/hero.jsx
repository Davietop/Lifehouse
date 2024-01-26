import { Button } from "@nextui-org/react";
const styles = {
  background: "linear-gradient(to left, #042431 , rgba( 255, 255, 255, 0 ))",
};

export default function Hero() {
  return (
    <div
      style={styles}
      className="mx-auto flex flex-col justify-center pl-[130px]  mt-6 w-full h-[620px]  "
    >
      <h2 className="text-6xl font-bold">Creative Solutions</h2>
      <br />
      <div className="mb-6">
        <h2 className="text-6xl font-bold">For All.</h2>
      </div>
      <Button className="bg-[#f15a24] mt-6 w-1/6 font-bold text-sm text-white">
        Join Our Team!
      </Button>
    </div>
  );
}

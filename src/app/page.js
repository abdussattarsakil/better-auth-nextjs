import { Button } from "@heroui/react";
import Link from "next/link";
import {EyesLookLeft} from '@gravity-ui/icons';

export default function Home() {
  return (
   <div className="text-center">
    <h1 className="text-2xl text-amber-50 font-extrabold">Learn BetterAuth MongoDb Adapter</h1>
    <h2 className="font-mono text-3xl text-amber-100">Learn:Authentication</h2>
    <Link href={"/auth/signup"}>
    <Button variant="primary">Sign Up <EyesLookLeft></EyesLookLeft></Button>
    </Link>
   </div>
  );
}

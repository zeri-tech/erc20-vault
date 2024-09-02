import useToast from "./useToast";

export type TxTrackingOptions = {
  fn: () => Promise<unknown> | unknown;
  isPending: boolean;
  title: string;
  description: string;
};

const useTxTracking = (options: TxTrackingOptions) => {
  const { update } = useToast();

  // TODO: Implement. Track based off `useWriteContract` hook's return values & state. Wrap the `fn` in a try/catch block and show a toast with the error message if it fails.
};

export default useTxTracking;

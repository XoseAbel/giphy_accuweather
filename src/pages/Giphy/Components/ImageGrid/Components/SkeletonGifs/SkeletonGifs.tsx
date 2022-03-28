import { Skeleton } from '@mui/material';

interface Props {
  height: number;
}

const SkeletonGifs = ({ height }: Props) => {
  const listSkeleton = Array.from(Array(10).keys());

  return (
    <>
      {listSkeleton.map((item) => (
        <Skeleton key={item} variant='rectangular' height={height} />
      ))}
    </>
  );
};

export { SkeletonGifs };

import { Grid, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGiphyList,
  selectGiphyLoading,
  selectGiphyPagination,
} from 'src/redux/giphy/selector';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { addToFavourite, removeToFavourite, updateOffset } from 'src/redux/giphy/giphySlice';
import NoResult from 'src/Components/NoResult';
import useInfiniteScroll from 'src/services/hooks/useInfiniteScroll';
import { useEffect, useMemo } from 'react';
import { getGiphy } from 'src/redux/giphy/methods/getGiphy';
import SkeletonGifs from './Components/SkeletonGifs';

const ImageGrid = () => {
  const dispatch = useDispatch();
  const height = useMemo(() => 250, []);
  const itemData = useSelector(selectGiphyList);
  const loading = useSelector(selectGiphyLoading);
  const pagination = useSelector(selectGiphyPagination);
  const { lastElement } = useInfiniteScroll(loading, pagination, updateOffset);

  const handleAddFav = (id: string) => {
    dispatch(addToFavourite(id));
  };

  const handleRemoveFav = (id: string) => {
    dispatch(removeToFavourite(id));
  };

  useEffect(() => {
    // dispatch GETs to apply infiniteScroll
    pagination.offset && dispatch(getGiphy());
  }, [pagination.offset, dispatch]);

  return (
    <Grid paddingTop='10px'>
      {itemData.length ? (
        <>
          <ImageList variant='quilted' cols={5} rowHeight={height}>
            {itemData.map((item) => (
              <ImageListItem key={item.id} cols={1} rows={1}>
                <img src={item.images.downsized_medium.url} alt={item.title} />
                <ImageListItemBar
                  sx={{ background: 'rgba(0, 0, 0, 0.75)' }}
                  title={item.title}
                  actionIcon={
                    item.favourite ? (
                      <IconButton
                        sx={{ color: 'rgba(248, 34, 55, 0.91)' }}
                        aria-label={`info about ${item.title}`}
                        onClick={() => handleRemoveFav(item.id)}
                      >
                        <MdFavorite />
                      </IconButton>
                    ) : (
                      <IconButton
                        sx={{ color: 'rgba(248, 34, 55, 0.91)' }}
                        aria-label={`info about ${item.title}`}
                        onClick={() => handleAddFav(item.id)}
                      >
                        <MdFavoriteBorder />
                      </IconButton>
                    )
                  }
                />
              </ImageListItem>
            ))}
            {loading ? <SkeletonGifs height={height} /> : <div ref={lastElement}></div>}
          </ImageList>
        </>
      ) : (
        <NoResult />
      )}
    </Grid>
  );
};

export { ImageGrid };

import { Grid, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectGiphyList } from 'src/redux/giphy/selector';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { addToFavourite, removeToFavourite } from 'src/redux/giphy/giphySlice';
import NoResult from 'src/Components/NoResult';

const ImageGrid = () => {
  const dispatch = useDispatch();
  const itemData = useSelector(selectGiphyList);

  const handleAddFav = (id: string) => {
    dispatch(addToFavourite(id));
  };

  const handleRemoveFav = (id: string) => {
    dispatch(removeToFavourite(id));
  };

  return (
    <Grid paddingTop='10px'>
      {itemData.length ? (
        <ImageList variant='quilted' cols={5} rowHeight={250}>
          {itemData.map((item) => (
            <ImageListItem key={item.id} cols={1} rows={1}>
              <img src={item.images.downsized_medium.url} alt={item.title} loading='lazy' />
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
        </ImageList>
      ) : (
        <NoResult />
      )}
    </Grid>
  );
};

export { ImageGrid };

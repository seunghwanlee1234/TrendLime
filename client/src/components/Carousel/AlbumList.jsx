import React from 'react';
import { Link } from 'react-router-dom';
import { Styled } from './styles';

import route from '../../routers/routeConstants';

function AlbumSlideItem({ songs, rankShown = false }) {
    if (songs[0] === null) {
        return [];
    } else {
        const items = songs.map((item, index) => (
            <Link to={`${route.DETAIL}/${item ? item.song_id : ''}`}>
                {rankShown && (
                    <Styled.Rank>
                        <span>{index + 1}.</span>
                    </Styled.Rank>
                )}
                <Styled.AlbumCover>
                    <img src={item.cover_url} alt={item.song_name} loading="lazy" />
                </Styled.AlbumCover>
                <Styled.SongInfo>
                    <p>{item.song_name}</p>
                    <p>{item.artist}</p>
                </Styled.SongInfo>
            </Link>
        ));
        return items;
    }
}

export default AlbumSlideItem;

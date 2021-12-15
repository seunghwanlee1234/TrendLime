import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Styled } from './styles';
import { SearchOutlined } from '@ant-design/icons';

import useInput from '../../utils/hooks/useInput';

import { fetchAutoCompleteSearchKey } from '../../utils/api/queryKeys';
import Debounce from '../../utils/hooks/useDebounce';
import { useQueryFetch } from '../../utils/hooks/useQueryFetch';
import route from '../../routers/routeConstants';

/*
  Arguments:
    - inputValue: 검색창에 입력되는 첫 input value
*/

const SearchBar = ({ inputValue }) => {
    const navigate = useNavigate();

    const [q, setQuery] = useState(inputValue);
    // const [{ q }, onChange, reset] = useInput({
    //     q: inputValue,
    // });

    const [onFocusStatus, setOnFocusStatus] = useState(false);
    const debouncedInputValue = Debounce(q, 400);

    const onChange = (e) => {
        if (e.target.value.length === 0) {
            setOnFocusStatus(false);
        } else {
            setOnFocusStatus(true);
        }
        setQuery(e.target.value);
    };

    /**
     * enabled:데이터 fetch 조건
     * 1) q가 빈스트링이 아님
     * 2) debounce를 거친 debouncedSearchTerm과 현재의 inputValue가 같은 경우
     *
     * initialData를 빈 배열로 설정하여, 첫 렌더링에 undefiend 값이 반환되지 않도록 설정
     */

    const { isLoading, data, error } = useQuery(
        [fetchAutoCompleteSearchKey, { q: debouncedInputValue }],
        useQueryFetch,
        {
            initialData: [],
            refetchOnWindowFocus: false,
            enabled: q?.length !== 0 && q === debouncedInputValue,
        },
    );

    const onEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (debouncedInputValue.length !== 0) {
                e.preventDefault();
                setOnFocusStatus(false);
                navigate(`${route.SEARCHTOTAL}/${debouncedInputValue}`);
            } else {
                alert('검색어를 입력해주세요!');
            }
        }
    };

    const artists = data?.artist ? data.artist : [];
    const albums = data?.album ? data.album : [];
    const songNames = data?.song_name ? data.song_name : [];

    return (
        <Styled.SearchArea>
            <Styled.SearchBar onFocusStatus={onFocusStatus}>
                <Styled.Input>
                    <input
                        placeholder="가수, 제목, 앨범을 검색해보세요."
                        onChange={onChange}
                        name="q"
                        value={q}
                        autoComplete="off"
                        onFocus={() =>
                            q.length !== 0 ? setOnFocusStatus(true) : setOnFocusStatus(false)
                        }
                        onBlur={() => setOnFocusStatus(false)}
                        onKeyDown={(e) => onEnterKeyPress(e)}
                    />
                </Styled.Input>
                <Styled.SearchBtn>
                    <Link to={`${route.SEARCHTOTAL}/${debouncedInputValue}`}>
                        <SearchOutlined />
                    </Link>
                </Styled.SearchBtn>
            </Styled.SearchBar>

            <Styled.AutoCompleteArea
                onFocusStatus={onFocusStatus}
                onMouseDown={(e) => e.preventDefault()}
            >
                <AutoCompleteResultSection
                    title="가수"
                    songs={artists}
                    isLoading={isLoading}
                    q={q}
                />
                <AutoCompleteResultSection
                    title="제목"
                    songs={songNames}
                    isLoading={isLoading}
                    q={q}
                />
                <AutoCompleteResultSection
                    title="앨범"
                    songs={albums}
                    isLoading={isLoading}
                    q={q}
                />
            </Styled.AutoCompleteArea>
        </Styled.SearchArea>
    );
};

//카테고리 선택할 때마다 SearchBar가 재랜더링되는 현상 방지
export default React.memo(SearchBar);

/*
  Arguments:
    - title: 가수/ 곡 제목 / 앨범/ 순 타이틀
    - songs: 타이틀과 관련된 샘플 데이터 3개
    - isLoading: 데이터를 가져오고 있는지 확인

  Etc:
    - songs[0] === null : 관련된 결과가 없는 경우를 판단
*/
function AutoCompleteResultSection({ title, songs, isLoading, q }) {
    const highlightKeyword = (sentence, keyword) =>
        sentence.split(keyword).reduce((prev, current, i) => {
            if (!i) {
                return [current];
            }
            return prev.concat(<b style={{ color: '#00DD00' }}>{keyword}</b>, current);
        }, []);

    return (
        <Styled.AutoCompleteResult>
            <p>{title}</p>
            <div>
                {isLoading ? (
                    <p>검색어를 불러오고 있습니다. </p>
                ) : songs[0] !== null ? (
                    <ul>
                        {songs.map((song) => (
                            <Link to={`${route.DETAIL}/${song ? song.song_id : ''}`}>
                                <Styled.AutoCompleteItem>
                                    <div>
                                        <img src={song.cover_url} alt={song.song_name} />
                                    </div>
                                    <div>
                                        <p>
                                            {highlightKeyword(song.song_name, q)}
                                            <span> - {highlightKeyword(song.artist, q)}</span>
                                        </p>
                                    </div>
                                </Styled.AutoCompleteItem>
                            </Link>
                        ))}
                    </ul>
                ) : (
                    <p>검색 결과가 없습니다.</p>
                )}
            </div>
        </Styled.AutoCompleteResult>
    );
}

import React, { useMemo, useContext } from 'react';
import { useQuery } from 'react-query';

import { fetchCategoryKey } from '../../../utils/api/queryKeys';
import { useQueryFetch } from '../../../utils/hooks/useQueryFetch';

import { SearchOptionContext } from '../SearchPage';
import { Styled } from './styles';

import filterBackground from './filterBackground';

function FilterItems() {
    const { searchOption, setSearchOption } = useContext(SearchOptionContext);
    const { data } = useQuery([fetchCategoryKey], useQueryFetch, {
        refetchOnWindowFocus: false,
        suspense: true,
    });

    const tags = useMemo(() => {
        if (data.length !== 0) {
            const filteredTags = data.tags.filter(
                (tag) => tag.category_name === searchOption.category,
            );
            setSearchOption({
                ...searchOption,
                tag: filteredTags[0].tag_name,
            });
            return filteredTags;
        } else {
            return [];
        }
    }, [data, searchOption.category]);

    return (
        <>
            {' '}
            <Styled.CategoryList>
                {data.categories.map((category) => (
                    <Styled.Category
                        active={category.category_name === searchOption.category}
                        onClick={() =>
                            setSearchOption({
                                ...searchOption,
                                category: category.category_name,
                            })
                        }
                    >
                        {category.category_name}
                    </Styled.Category>
                ))}
            </Styled.CategoryList>
            <Styled.OptionsWrapper>
                {
                    <Styled.OptionListWrapper>
                        {tags.map((tag) => (
                            <Styled.OptionList
                                active={tag.tag_name === searchOption.tag}
                                onClick={() =>
                                    setSearchOption({
                                        ...searchOption,
                                        tag: tag.tag_name,
                                    })
                                }
                                url={
                                    filterBackground[tag.tag_name]
                                        ? filterBackground[tag.tag_name].url
                                        : ''
                                }
                            >
                                {tag.tag_name}
                            </Styled.OptionList>
                        ))}
                    </Styled.OptionListWrapper>
                }
            </Styled.OptionsWrapper>
        </>
    );
}

export default React.memo(FilterItems);

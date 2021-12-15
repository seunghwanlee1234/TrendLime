import React, { Suspense } from 'react';
import { Styled } from './styles';

import Spinner from '../../../common/Spinner/index';

const FilterItmes = React.lazy(() => import('./FilterItems'));

/*
  Arguments:
    - selectedOptions: 선택한 옵션 정보 (카테고리 인덱스, 태그 인덱스)
    - selectOptions: 선택한 옵션 정보를 업데이트하는 함수
*/

function FilterWrapper({ searchOption, setSearchOption }) {
    return (
        <Styled.CategoryWrapper>
            <Suspense fallback={<Spinner />}>
                <FilterItmes searchOption={searchOption} setSearchOption={setSearchOption} />
            </Suspense>
        </Styled.CategoryWrapper>
    );
}

export default React.memo(FilterWrapper);

import React , { useState , useLayoutEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import PostsList from '@/views/posts/PostsList';
import { searchPostsAsync , initLoadingState } from '@/reducer/postsReducer';
import { RootState } from '@/reducer';
import { Paging } from '@/views/common';
import { Pageable } from '@/models';
import qs from 'qs';
import { createBrowserHistory } from 'history';

function onSearchPosts(dispatch: Dispatch , pageable: Pageable) {
	dispatch(searchPostsAsync(pageable));
}

function onInitLoadingState(dispatch: Dispatch) {
	dispatch(initLoadingState());
}

interface IPostsContainer {
	tagId: number;
	searchWord: string;
}

export default function PostsContainer({ tagId , searchWord }: IPostsContainer) {
	const dispatch = useDispatch();
	
	const [pageNumber , setPageNumber] = useState(1);
	let targetPage: any = 0;
	const history = createBrowserHistory();

	function onChangePage(e: any , page: number) {
		if (pageNumber !== page) {
			window.location.href=`/posts?page=${page}`;
		}
	}

	useLayoutEffect(() => {
		const filterParams = history.location.search.substr(1);
		const filtersFromParams = qs.parse(filterParams);
		targetPage = filtersFromParams.page;

		if (targetPage) {
			setPageNumber(Number(targetPage));
			onSearchPosts(dispatch , new Pageable(targetPage - 1));
			return;
		} 

		targetPage = 0;
		onInitLoadingState(dispatch);
		onSearchPosts(dispatch , new Pageable(targetPage));
	} , [targetPage]);

	const { posts , isLoading } = useSelector(
		(state: RootState) => state.postsReducer);

	return (
		<>
			<PostsList data={posts} isLoading={isLoading} />
			<Paging 
				totalPages={posts.totalPages} 
				pagable={posts.pageable}
				handlePageChange={onChangePage}
				selectedPage={pageNumber}
			/>
		</>
	);
}
import { Pageable, PageModel, PostsModel } from '../models';
import http from '../core/http/http';

export const getPostsAll = async(pageable: Pageable): Promise<PageModel> => {
	const url = 'http://localhost:8080/posts' + '?page=' + pageable.page;
	const response = await http.get(url);
	return response.data;
};

export const getPosts = async(id: number): Promise<PostsModel> => {
	const url = 'http://localhost:8080/posts/' + id;
	const response = await http.get(url);
	return response.data;
};

export const getLatestPosts = async(): Promise<PostsModel[]> => {
	const url = 'http://localhost:8080/posts/latest';
	const response = await http.get(url);
	return response.data;
};

export const getPostsByTags = async(tagId: number , pageable: Pageable): Promise<PageModel> => {
	const url = 'http://localhost:8080/posts/tags/' + tagId + '?page=' + pageable.page;
	const response = await http.get(url);
	return response.data;
};
/**
 * @packageDocumentation
 * @module api.functional.sellers.sales.articles.comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";

import type { ISaleArticleComment } from "./../../../../../structures/ISaleArticleComment";

/**
 * Store a new comment.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param request Instance of the Express.Request
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param articleId ID of the target article
 * @param body Content to write
 * @return Newly archived comment
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 401 unauthorized error when you've not logged in yet
 * @throw 403 forbidden error when you're a seller and the sale is not yours
 * @throw 404 not found error when unable to find the matched record
 * 
 * @controller MultipleCommentsController.store()
 * @path POST /sellers/:section/sales/:saleId/articles/:articleId/comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function store
    (
        connection: IConnection,
        section: string,
        saleId: number,
        articleId: number,
        body: Primitive<store.Input>
    ): Promise<store.Output>
{
    return Fetcher.fetch
    (
        connection,
        store.ENCRYPTED,
        store.METHOD,
        store.path(section, saleId, articleId),
        body
    );
}
export namespace store
{
    export type Input = Primitive<ISaleArticleComment.IStore>;
    export type Output = Primitive<ISaleArticleComment>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/sellers/:section/sales/:saleId/articles/:articleId/comments";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(section: string, saleId: number, articleId: number): string
    {
        return `/sellers/${section}/sales/${saleId}/articles/${articleId}/comments`;
    }
}
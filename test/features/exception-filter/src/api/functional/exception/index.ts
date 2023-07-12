/**
 * @packageDocumentation
 * @module api.functional.exception
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection, Primitive } from "@nestia/fetcher";

import type { IBbsArticle, IAttachmentFile } from "./../../structures/IBbsArticle";

/**
 * @controller ExceptionController.typedBody()
 * @path POST /exception/typedBody
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function typedBody(
    connection: IConnection,
    input: typedBody.Input,
): Promise<typedBody.Output> {
    return Fetcher.fetch(
        connection,
        typedBody.ENCRYPTED,
        typedBody.METHOD,
        typedBody.path(),
        input
    );
}
export namespace typedBody {
    export type Input = Primitive<IBbsArticle.IStore>;
    export type Output = Primitive<IBbsArticle>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/exception/typedBody";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/exception/typedBody`;
    }
}

/**
 * @controller ExceptionController.typedManual()
 * @path GET /exception/typedManual
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function typedManual(
    connection: IConnection,
): Promise<void> {
    return Fetcher.fetch(
        connection,
        typedManual.ENCRYPTED,
        typedManual.METHOD,
        typedManual.path()
    );
}
export namespace typedManual {

    export const METHOD = "GET" as const;
    export const PATH: string = "/exception/typedManual";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/exception/typedManual`;
    }
}

/**
 * @controller ExceptionController.typedParam()
 * @path GET /exception/:id/typedParam
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function typedParam(
    connection: IConnection,
    id: string,
): Promise<void> {
    return Fetcher.fetch(
        connection,
        typedParam.ENCRYPTED,
        typedParam.METHOD,
        typedParam.path(id)
    );
}
export namespace typedParam {

    export const METHOD = "GET" as const;
    export const PATH: string = "/exception/:id/typedParam";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (id: string): string => {
        return `/exception/${encodeURIComponent(id ?? "null")}/typedParam`;
    }
}

/**
 * @controller ExceptionController.typedQuery()
 * @path GET /exception/typedQuery
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function typedQuery(
    connection: IConnection,
    file: typedQuery.Query,
): Promise<typedQuery.Output> {
    return Fetcher.fetch(
        connection,
        typedQuery.ENCRYPTED,
        typedQuery.METHOD,
        typedQuery.path(file)
    );
}
export namespace typedQuery {
    export type Query = Primitive<IAttachmentFile>;
    export type Output = Primitive<IAttachmentFile>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/exception/typedQuery";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (file: typedQuery.Query): string => {
        const variables: Record<any, any> = file as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/exception/typedQuery${encoded.length ? `?${encoded}` : ""}`;;
    }
}

/**
 * @controller ExceptionController.internal()
 * @path GET /exception/internal
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function internal(
    connection: IConnection,
): Promise<void> {
    return Fetcher.fetch(
        connection,
        internal.ENCRYPTED,
        internal.METHOD,
        internal.path()
    );
}
export namespace internal {

    export const METHOD = "GET" as const;
    export const PATH: string = "/exception/internal";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/exception/internal`;
    }
}
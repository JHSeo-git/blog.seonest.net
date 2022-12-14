import { cn } from '@/utils/styleUtils';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  listType: 'ol' | 'ul';
}

function List({ listType, className, ...rest }: ListProps) {
  return (
    <>
      {listType === 'ul' && (
        <ul className={cn('list-disc pl-6 text-base leading-7 sm:text-lg', className)} {...rest} />
      )}
      {listType === 'ol' && (
        <ol
          className={cn('list-decimal pl-6 text-base leading-7 sm:text-lg', className)}
          {...rest}
        />
      )}
    </>
  );
}

export type ItemProps = React.HTMLAttributes<HTMLLIElement>;

function Item({ className, ...rest }: ItemProps) {
  return <li className={cn('my-2 break-words', className)} {...rest} />;
}

List.Item = Item;

export default List;

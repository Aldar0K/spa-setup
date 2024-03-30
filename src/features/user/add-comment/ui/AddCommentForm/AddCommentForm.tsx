import { FC, FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ReducerList,
  useAppDispatch,
  useAppSelector
} from 'app/providers/StoreProvider';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { Button, Input } from 'shared/ui';
import {
  getAddCommentError,
  getAddCommentIsLoading,
  getAddCommentText
} from '../../model/selectors';
import { sendComment } from '../../model/services/sendComment';
import { addCommentActions, addCommentReducer } from '../../model/slice';
import cls from './AddCommentForm.module.scss';

const reducers: ReducerList = {
  addComment: addCommentReducer
};

type AddCommentFormProps = {
  className?: string;
};

const AddCommentForm: FC<AddCommentFormProps> = memo(props => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useAppSelector(getAddCommentText);
  const isLoading = useAppSelector(getAddCommentIsLoading);
  const error = useAppSelector(getAddCommentError);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentActions.setText(value));
  }, []);

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(sendComment());
  }, []);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <form
        onSubmit={onSubmit}
        className={classNames(cls.container, {}, [className])}
        data-testid='AddCommentForm'
      >
        <Input
          placeholder={t('Your comment')}
          value={text}
          onChange={onCommentTextChange}
          className={cls.input}
        />

        <Button type='submit'>{t('Send')}</Button>
      </form>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;

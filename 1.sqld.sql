create table members02(
id varchar2(20) primary key,
pwd varchar2(100),
name varchar2(20),
addr varchar2(100)
);

insert into members02 values('aaa','aaa','È«±æµ¿','»ê°ñÂ¥±â');
insert into members02 values('bbb','bbb','±è°³¶Ë','°³¶Ëº°');
insert into members02 values('ccc','ccc','°í±æ¶Ë','¸¶Æ÷±¸');
commit;

desc members02;
select * from members02;
delete from members02;